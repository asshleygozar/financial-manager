import React, { RefObject } from 'react';

// Form types and attributes
interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
	children: React.ReactNode;
}

interface FormGroupProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}

interface FormLabel extends React.LabelHTMLAttributes<HTMLLabelElement> {
	children: React.ReactNode;
}

interface FormInput extends React.InputHTMLAttributes<HTMLInputElement> {
	ref: RefObject<HTMLInputElement>;
}

// Form
export function Form({ className, children, ...props }: FormProps) {
	return (
		<form
			className={className}
			{...props}
		>
			{children}
		</form>
	);
}

// Form grouping container
export function FormGroup({ className, children, ...props }: FormGroupProps) {
	return (
		<div
			className={className}
			{...props}
		>
			{children}
		</div>
	);
}

// Form label component
export function FormLabel({ className, children, ...props }: FormLabel) {
	return (
		<label
			className={className}
			{...props}
		>
			{children}
		</label>
	);
}

export function FormInput({ className, ref, ...props }: FormInput) {
	return (
		<input
			ref={ref}
			className={className}
			{...props}
		/>
	);
}
