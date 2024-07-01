"use client";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import CustomButton from "../custom/CustomButton";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";

const formSchema = z.object({
  preferredBank: z.string().min(1, "Preferred Bank is required"),
  accountHolderName: z.string().min(1, "Account Holder's Name is required"),
  accountNumber: z.string().min(1, "Account Number is required"),
  withdrawAmount: z
    .number()
    .min(1, "Withdraw Amount must be greater than zero"),
});

const BankForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      preferredBank: "bank1",
      accountHolderName: "",
      accountNumber: "",
      withdrawAmount: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 text-primary"
      >
        <FormField
          control={form.control}
          name="preferredBank"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred Bank</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your bank" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bank1">Bank 1</SelectItem>
                    <SelectItem value="bank2">Bank 2</SelectItem>
                    <SelectItem value="bank3">Bank 3</SelectItem>
                    <SelectItem value="bank4">Bank 4</SelectItem>
                    <SelectItem value="bank5">Bank 5</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="accountHolderName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bank Account Holder's Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter account holder's name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between gap-5 mb-4">
          <FormField
            control={form.control}
            name="accountNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bank Account Number</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter account number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="withdrawAmount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Withdraw Amount</FormLabel>
                <FormControl>
                  <Input {...field} type="number" placeholder="Enter amount" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="my-4">
          <Link to="/deposit-history" className="text-white">
            <CustomButton
              size="large"
              text="Request Withdrawal"
              onClick={() => console.log("Hi")}
              // onClick={form.handleSubmit(onSubmit)}
            />
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default BankForm;
