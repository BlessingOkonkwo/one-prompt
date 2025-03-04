import React from "react";
import { create, show, useModal } from "@ebay/nice-modal-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILoginPayload } from "@/types";
import FormInput from "@/components/inputs/form-input";
import PasswordInput from "@/components/inputs/password-input";
import { Button } from "@/components/ui/button";
import LoadingButton from "@/components/controls/loading-button";
import OneTokenModal from "./one-token-modal";

const LoginFormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email must be a valid email address")
    .required("Please enter your email address"),
  password: Yup.string().required("Password is required"),
});

const LoginModal = create(() => {
  const { resolve, remove, visible } = useModal();

  const handleCloseModal = () => {
    resolve({ resolved: true });
    remove();
  };

  const defaultValues = {
    email: "",
    password: "",
  };

  const methods = useForm<Omit<ILoginPayload, "serviceAccountApiKey">>({
    mode: "onChange",
    resolver: yupResolver(LoginFormSchema),
    reValidateMode: "onChange",
    delayError: 2000,
    defaultValues: defaultValues,
  });

  const {
    handleSubmit,
    formState: { errors, isDirty },
  } = methods;
  return (
    <AlertDialog open={visible} onOpenChange={handleCloseModal}>
      <AlertDialogContent className="sm:max-w-[425px] bg-authBackground h-[542px] min-w-[543px] flex flex-col items-center gap-[48px]">
        <AlertDialogHeader className="flex flex-col gap-3 items-center">
          <AlertDialogTitle className="text-authHeading text-[32px] font-bold">
            Login
          </AlertDialogTitle>
          <AlertDialogDescription className="text-authSubHeading text-base !mt-0">
            Enter your details to proceed
          </AlertDialogDescription>
        </AlertDialogHeader>

        <FormProvider {...methods}>
          <form className="flex flex-col gap-[24px] w-[335px]">
            <FormInput
              label="Email Address"
              name="email"
              placeholder="Enter Username"
              error={errors["email"]}
            />

            <PasswordInput
              label="Password"
              name="password"
              placeholder="Enter Password"
              error={errors["password"]}
            />
          </form>
        </FormProvider>

        <AlertDialogFooter className="w-[335px]">
          <LoadingButton
            variant="default"
            disabled={!isDirty}
            onClick={() => {
              show(OneTokenModal);
              handleCloseModal();
            }}
            className="w-full"
            loading={false}
          >
            Login
          </LoadingButton>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
});

export default LoginModal;
