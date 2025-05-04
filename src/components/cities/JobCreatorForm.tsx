
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { City, JobSector, cities } from '@/models/cities';
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Briefcase, Building } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  idNumber: z.string().min(5, "ID number is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Valid email is required"),
  skills: z.string().min(5, "Please describe your skills"),
  experience: z.string().min(5, "Please describe your experience"),
  education: z.string().min(2, "Please provide your highest education"),
  preferredCity: z.coerce.number().min(1, "Please select a preferred city"),
  preferredSectors: z.array(z.string()).min(1, "Select at least one sector"),
});

type FormData = z.infer<typeof formSchema>;

interface JobCreatorFormProps {
  city?: City;
  onJobApplicationSubmit: (data: FormData) => void;
  onCancel: () => void;
}

const JobCreatorForm: React.FC<JobCreatorFormProps> = ({ city, onJobApplicationSubmit, onCancel }) => {
  const [selectedCity, setSelectedCity] = useState<City | undefined>(city);
  const [availableSectors, setAvailableSectors] = useState<JobSector[]>(
    city ? city.jobs : []
  );

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      idNumber: '',
      phone: '',
      email: '',
      skills: '',
      experience: '',
      education: '',
      preferredCity: city ? city.id : undefined,
      preferredSectors: [],
    },
  });

  const handleCityChange = (cityId: number) => {
    const newSelectedCity = cities.find(c => c.id === cityId);
    setSelectedCity(newSelectedCity);
    setAvailableSectors(newSelectedCity ? newSelectedCity.jobs : []);
    form.setValue('preferredSectors', []);
  };

  function onSubmit(data: FormData) {
    onJobApplicationSubmit(data);
    toast.success("Job application submitted successfully!");
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-navyblue mb-6 flex items-center">
        <Briefcase className="mr-2 h-5 w-5" />
        +Job Creator Application
      </h2>

      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-700">
          The +Job Creator program allows you to register your interest in job opportunities 
          that will be created as part of the 100 Cities project. By registering now, you'll be 
          considered for positions before they are advertised publicly.
        </p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="idNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ID Number</FormLabel>
                  <FormControl>
                    <Input placeholder="ID Number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Email address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="education"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Highest Education</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Matric, Bachelor's Degree, Diploma, etc." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="skills"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Skills</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Describe your skills, certifications, and qualifications" 
                    className="min-h-[100px]"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Work Experience</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Describe your relevant work experience" 
                    className="min-h-[100px]"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="preferredCity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred City</FormLabel>
                  <Select 
                    onValueChange={(value) => {
                      const cityId = parseInt(value);
                      field.onChange(cityId);
                      handleCityChange(cityId);
                    }} 
                    defaultValue={field.value?.toString()}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a city" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {cities.map((city) => (
                        <SelectItem key={city.id} value={city.id.toString()}>
                          {city.name}, {city.province}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="preferredSectors"
            render={({ field }) => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel>Preferred Sectors</FormLabel>
                  <div className="text-sm text-gray-500">Select job sectors you're interested in</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {availableSectors.map((sector) => (
                    <Card key={sector.id} className={
                      field.value.includes(sector.name) 
                        ? "border-navyblue bg-navyblue/5" 
                        : "border-gray-200"
                    }>
                      <CardContent className="p-4 flex gap-3 items-start">
                        <Checkbox
                          checked={field.value.includes(sector.name)}
                          onCheckedChange={(checked) => {
                            const updatedSectors = checked
                              ? [...field.value, sector.name]
                              : field.value.filter((value) => value !== sector.name);
                            
                            field.onChange(updatedSectors);
                          }}
                          id={`sector-${sector.id}`}
                          className="mt-1"
                        />
                        <div>
                          <label
                            htmlFor={`sector-${sector.id}`}
                            className="font-medium cursor-pointer"
                          >
                            {sector.name}
                            <Badge className="ml-2 bg-blue-100 text-blue-800 hover:bg-blue-100">
                              {sector.estimatedJobs} jobs
                            </Badge>
                          </label>
                          <p className="text-sm text-gray-500 mt-1">
                            {sector.description}
                          </p>
                          <div className="mt-2 flex flex-wrap gap-1">
                            {sector.roles.slice(0, 3).map((role) => (
                              <Badge key={role.id} variant="outline" className="text-xs">
                                {role.title}
                              </Badge>
                            ))}
                            {sector.roles.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{sector.roles.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end gap-4 mt-8">
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit" className="bg-navyblue">
              Submit Application
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default JobCreatorForm;
