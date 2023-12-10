import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { Field } from "formik";
import { FunctionComponent, useState } from "react";

import { NavLink } from "react-router-dom";
import ClosedEyeIcon from "../../../../ui/icons/ClosedEyeIcon/ClosedEyeIcon";
import EyeIcon from "../../../../ui/icons/EyeIcon/EyeIcon";

interface FormInputProps {
  name: string;
  label: string;
  placeholder: string;
  type: "email" | "password" | "name";
  isResetable?: boolean;
}

const FormInput: FunctionComponent<FormInputProps> = ({
  name,
  type,
  label,
  placeholder,
  isResetable,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <Field width="100%" name={name}>
      {({ field, form }: { field: any; form: any }) => (
        <FormControl
          minWidth={{ base:'100%', sm:'25rem', xl:'50rem'}}
          isInvalid={form.errors[name] && form.touched[name]}
        >
          <FormLabel paddingLeft={{ base: "0.5rem", md: "0.75rem" }}>
            <Text
              size={{
                base: "sm",
                md: "md",
                xl: "caption",
              }}
            >
              {label}
            </Text>
          </FormLabel>
          <InputGroup>
            <Input
              {...field}
              fontSize='md'
              type={type === "password" && !showPassword ? "password" : "text"}
              _invalid={{
                boxShadow: "none",
                border: "0.0625rem solid #FF114A",
              }}
              lineHeight="1.25rem"
              errorBorderColor="#FF114A"
              borderRadius={{
                base: "0.75rem",
                sm: "0.5rem",
                xl: "0.75rem",
              }}
              outline="none !important"
              _focus={{
                border: "0.0625rem solid rgba(0,0,0,0.2)",
                outline: "none !important",
                boxShadow: "none",
              }}
              border="0.0625rem solid rgba(0,0,0,0.2)"
              py='1.25rem'
              px='1.5rem'
              placeholder={placeholder}
            />
            <InputRightElement
              right={{ base: "1.5rem", sm: "1rem", lg: "1.5rem" }}
              top="50%"
              transform="translateY(-50%)"
            >
              {type === "password" && (
                <IconButton
                  onClick={() =>
                    setShowPassword((prevShowPassword) => !prevShowPassword)
                  }
                  _hover={{}}
                  _active={{}}
                  background="transparent"
                  height="auto"
                  size="auto"
                  aria-label="eye"
                  icon={
                    showPassword ? (
                      <ClosedEyeIcon
                        width={{
                          base: "1.25rem",
                          sm: "1rem",
                          xl: "1.5rem",
                        }}
                      />
                    ) : (
                      <EyeIcon
                        width={{
                          base: "1.25rem",
                          sm: "1rem",
                          xl: "1.5rem",
                        }}
                      />
                    )
                  }
                />
              )}
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage
            position="absolute"
            right={0}
            paddingRight="0.75rem"
            placeContent="end"
          >
            <Text
              fontWeight={600}
              size={{
                base: "caption",
                sm: "xs",
                md: "sm",
                xl: "caption",
              }}
              color="#FF114A"
            >
              {form.errors[name]}
            </Text>
          </FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default FormInput;
