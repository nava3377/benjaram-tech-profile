
import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface ContactFormFieldProps {
  label: string;
  id: string;
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  disabled?: boolean;
  isTextarea?: boolean;
}

export const ContactFormField: React.FC<ContactFormFieldProps> = ({
  label,
  id,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  disabled = false,
  isTextarea = false
}) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">{label}</label>
      {isTextarea ? (
        <Textarea
          id={id}
          name={name}
          placeholder={placeholder}
          className="min-h-[150px] border-gray-300 focus:border-portfolio-purple"
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
        />
      ) : (
        <Input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          className="border-gray-300 focus:border-portfolio-purple"
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
        />
      )}
    </div>
  );
};
