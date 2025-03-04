import React from "react";
import { create, show, useModal } from "@ebay/nice-modal-react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILoginPayload } from "@/types";
import { FieldSet } from "@/components/inputs/fieldset";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import InputErrorMessage from "@/components/inputs/input-error-message";
import LoadingButton from "@/components/controls/loading-button";
import { useStateContext } from "@/state/provider";

const tokenLoginFormSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, { message: "OTP has to be 6 digits" })
    .required("Please enter OTP"),
});

const OneTokenModal = create(() => {
  const { resolve, remove, visible } = useModal();
  const { setIsLoggedIn } = useStateContext();

  const handleCloseModal = () => {
    resolve({ resolved: true });
    remove();
  };

  const defaultValues = {
    password: "",
  };

  const methods = useForm<{ password: string }>({
    mode: "onChange",
    resolver: yupResolver(tokenLoginFormSchema),
    reValidateMode: "onChange",
    delayError: 2000,
    defaultValues: defaultValues,
  });

  const {
    handleSubmit,
    formState: { errors, isDirty },
  } = methods;

  const onSubmit: SubmitHandler<{ password: string }> = () => {
    setIsLoggedIn(true);
    handleCloseModal();
  };

  return (
    <AlertDialog open={visible} onOpenChange={handleCloseModal}>
      <AlertDialogContent className="sm:max-w-[425px] bg-authBackground h-[460px] min-w-[543px] flex flex-col items-center justify-center gap-[48px]">
        <AlertDialogHeader className="flex flex-col gap-3 items-center">
          <AlertDialogTitle className="text-authHeading text-[32px] font-bold">
            Authentication
          </AlertDialogTitle>
          <AlertDialogDescription className="text-authSubHeading text-base !mt-0">
            Enter details to proceed
          </AlertDialogDescription>
        </AlertDialogHeader>

        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-[48px] w-[335px]"
          >
            <Controller
              name="password"
              control={methods.control}
              render={({ field: { value, name, onChange, onBlur } }) => (
                <FieldSet>
                  <InputOTP
                    maxLength={6}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                  <InputErrorMessage
                    errors={errors?.password}
                    name={`${name}`}
                  />
                </FieldSet>
              )}
            />

            <LoadingButton loading={false} type="submit" disabled={!isDirty}>
              Continue
            </LoadingButton>
          </form>
        </FormProvider>
      </AlertDialogContent>
    </AlertDialog>
  );
});

export default OneTokenModal;
