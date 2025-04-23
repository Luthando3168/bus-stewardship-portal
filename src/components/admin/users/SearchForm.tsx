
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

type SearchFormValues = {
  searchType: 'name' | 'email' | 'id';
  searchValue: string;
};

interface SearchFormProps {
  onSubmit: (data: SearchFormValues) => void;
  onClear: () => void;
}

const SearchForm = ({ onSubmit, onClear }: SearchFormProps) => {
  const form = useForm<SearchFormValues>({
    defaultValues: {
      searchType: 'name',
      searchValue: '',
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Advanced Search</CardTitle>
        <CardDescription>
          Search for users by name, email, or ID/Passport number
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="searchType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Search By</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="name" id="name" />
                        <Label htmlFor="name">Name</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="email" id="email" />
                        <Label htmlFor="email">Email</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="id" id="id" />
                        <Label htmlFor="id">ID/Passport Number</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="searchValue"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Search Term</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter search term..." {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            
            <div className="flex justify-end gap-2">
              <Button 
                type="button" 
                variant="outline"
                onClick={() => {
                  form.reset({
                    searchType: 'name',
                    searchValue: '',
                  });
                  onClear();
                }}
              >
                Clear
              </Button>
              <Button type="submit" className="bg-navyblue hover:bg-blue-800">
                Search
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SearchForm;
