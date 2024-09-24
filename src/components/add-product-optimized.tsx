'use client'

import React, { useState, useCallback } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { toast } from "@/components/ui/use-toast"
import { Loader2, Plus, X, Camera } from 'lucide-react'
import { useDropzone } from 'react-dropzone'

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"]

const schema = z.object({
  name: z.string().min(3, { message: "Product name must be at least 3 characters" }),
  description: z.string().min(10, { message: "Description must be at least 10 characters" }),
  price: z.number().min(0.01, { message: "Price must be greater than 0" }),
  category: z.string().nonempty({ message: "Please select a category" }),
  condition: z.enum(["new", "like-new", "good", "fair", "poor"]),
  brand: z.string().optional(),
  model: z.string().optional(),
  year: z.number().min(1900).max(new Date().getFullYear()).optional(),
  tags: z.array(z.string()).min(1, { message: "Add at least one tag" }),
  isNegotiable: z.boolean(),
  acceptTrade: z.boolean(),
  shippingOption: z.enum(["pickup", "delivery", "both"]),
  images: z.array(z.any()).min(1, { message: "Upload at least one image" }).max(5, { message: "Maximum 5 images allowed" }),
})

type FormData = z.infer<typeof schema>

export function AddProductOptimized() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [tags, setTags] = useState<string[]>([])
  const [newTag, setNewTag] = useState('')
  const [activeTab, setActiveTab] = useState('basic')
  const [images, setImages] = useState<File[]>([])

  const { register, handleSubmit, control, formState: { errors, isValid }, watch } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: {
      condition: "new",
      isNegotiable: false,
      acceptTrade: false,
      shippingOption: "pickup",
      tags: [],
    }
  })

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setImages(prev => [...prev, ...acceptedFiles].slice(0, 5))
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp']
    },
    maxSize: MAX_FILE_SIZE,
    maxFiles: 5,
  })

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index))
  }

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    console.log(data)
    await new Promise(resolve => setTimeout(resolve, 2000))
    toast({
      title: "Product added successfully",
      description: "Your product has been listed on the marketplace.",
    })
    setIsSubmitting(false)
  }

  const addTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag])
      setNewTag('')
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove))
  }

  const watchAllFields = watch()

  const calculateProgress = () => {
    const totalFields = Object.keys(schema.shape).length
    const filledFields = Object.values(watchAllFields).filter(Boolean).length
    return (filledFields / totalFields) * 100
  }

  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl sm:text-3xl">Add New Product</CardTitle>
          <CardDescription>List your product on the student marketplace with detailed information</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent>
            <div className="mb-6">
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-primary rounded-full transition-all duration-500 ease-in-out"
                  style={{ width: `${calculateProgress()}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">Form Completion: {Math.round(calculateProgress())}%</p>
            </div>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="basic">Basic Info</TabsTrigger>
                <TabsTrigger value="details">Details & Pricing</TabsTrigger>
              </TabsList>
              <TabsContent value="basic" className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Product Name</Label>
                  <Input id="name" {...register('name')} className="w-full" />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" {...register('description')} className="w-full min-h-[100px]" />
                  {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Controller
                    name="category"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="textbooks">Textbooks</SelectItem>
                          <SelectItem value="electronics">Electronics</SelectItem>
                          <SelectItem value="furniture">Furniture</SelectItem>
                          <SelectItem value="clothing">Clothing</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label>Condition</Label>
                  <Controller
                    name="condition"
                    control={control}
                    render={({ field }) => (
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-wrap gap-4"
                      >
                        {["new", "like-new", "good", "fair", "poor"].map((condition) => (
                          <div key={condition} className="flex items-center space-x-2">
                            <RadioGroupItem value={condition} id={condition} />
                            <Label htmlFor={condition} className="capitalize">{condition.replace('-', ' ')}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    )}
                  />
                </div>
              </TabsContent>
              <TabsContent value="details" className="space-y-4 mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="brand">Brand (Optional)</Label>
                    <Input id="brand" {...register('brand')} className="w-full" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="model">Model (Optional)</Label>
                    <Input id="model" {...register('model')} className="w-full" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="year">Year (Optional)</Label>
                  <Input id="year" type="number" {...register('year', { valueAsNumber: true })} className="w-full" />
                  {errors.year && <p className="text-red-500 text-sm">{errors.year.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label>Tags</Label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {tags.map(tag => (
                      <span key={tag} className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-sm flex items-center">
                        {tag}
                        <button type="button" onClick={() => removeTag(tag)} className="ml-1 text-primary-foreground">
                          <X size={14} />
                        </button>
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Input
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      placeholder="Add a tag"
                      className="flex-grow"
                    />
                    <Button type="button" onClick={addTag} size="sm">
                      <Plus size={16} />
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Images</Label>
                  <div {...getRootProps()} className="border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 transition duration-300">
                    <input {...getInputProps()} />
                    {isDragActive ? (
                      <p>Drop the files here ...</p>
                    ) : (
                      <div>
                        <Camera className="mx-auto h-12 w-12 text-gray-400" />
                        <p>Drag 'n' drop some files here, or click to select files</p>
                        <em>(Up to 5 images, max 5MB each)</em>
                      </div>
                    )}
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
                    {images.map((file, index) => (
                      <div key={index} className="relative">
                        <img
                          src={URL.createObjectURL(file)}
                          alt={`preview ${index}`}
                          className="w-full h-24 object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                  {errors.images && <p className="text-red-500 text-sm">{errors.images.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price">Price ($)</Label>
                  <Input id="price" type="number" step="0.01" {...register('price', { valueAsNumber: true })} className="w-full" />
                  {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
                </div>
                <div className="flex items-center space-x-2">
                  <Controller
                    name="isNegotiable"
                    control={control}
                    render={({ field }) => (
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        id="is-negotiable"
                      />
                    )}
                  />
                  <Label htmlFor="is-negotiable">Price is negotiable</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Controller
                    name="acceptTrade"
                    control={control}
                    render={({ field }) => (
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        id="accept-trade"
                      />
                    )}
                  />
                  <Label htmlFor="accept-trade">Accept trades</Label>
                </div>
                <div className="space-y-2">
                  <Label>Shipping Options</Label>
                  <Controller
                    name="shippingOption"
                    control={control}
                    render={({ field }) => (
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        {["pickup", "delivery", "both"].map((option) => (
                          <div key={option} className="flex items-center space-x-2">
                            <RadioGroupItem value={option} id={option} />
                            <Label htmlFor={option} className="capitalize">
                              {option === "both" ? "Both pickup and delivery" : `${option} only`}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    )}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter>
            <div className="w-full space-y-4">
              <div className="flex justify-between">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setActiveTab(activeTab === 'basic' ? 'basic' : 'basic')}
                  disabled={activeTab === 'basic'}
                >
                  Previous
                </Button>
                <Button
                  type="button"
                  onClick={() => setActiveTab(activeTab === 'basic' ? 'details' : 'details')}
                  disabled={activeTab === 'details'}
                >
                  Next
                </Button>
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting || !isValid}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Adding Product...
                  </>
                ) : (
                  "Add Product"
                )}
              </Button>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}