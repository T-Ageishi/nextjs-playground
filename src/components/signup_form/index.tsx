"use client";

import { signup } from "@/lib/actions/auth";
import { ComponentProps, ReactNode, useActionState } from "react";

export function SignupForm() {
	const [state, action, pending] = useActionState(signup, undefined);

	return (
		<form
			action={action}
			className={"grid gap-y-4 grid-cols-[max-content_1fr] w-64 mx-auto"}
		>
			<Label htmlFor="name">Name</Label>
			<Input id="name" name="name" placeholder="Name" />
			{state?.errors?.name && <p>{state.errors.name}</p>}

			<Label htmlFor="email">Email</Label>
			<Input id="email" name="email" type="email" placeholder="Email" />
			{state?.errors?.email && <p>{state.errors.email}</p>}

			<Label htmlFor="password">Password</Label>
			<Input id="password" name="password" type="password" />
			{state?.errors?.password && (
				<div>
					<p>Password must:</p>
					<ul>
						{state.errors.password.map((error) => (
							<li key={error}>- {error}</li>
						))}
					</ul>
				</div>
			)}

			<div
				className={
					"flex items-center justify-center col-start-1 col-end-3 pt-3"
				}
			>
				<button
					disabled={pending}
					type="submit"
					className={
						"border-2 border-blue-500 rounded bg-blue-500 p-2 text-white"
					}
				>
					Sign Up
				</button>
			</div>
		</form>
	);
}

function Label({
	children,
	...props
}: ComponentProps<"label"> & { children: ReactNode }) {
	return (
		<label {...props} className={"pr-4"}>
			{children}
		</label>
	);
}

function Input(props: ComponentProps<"input">) {
	return <input {...props} className={"border border-gray-200 p-1 rounded"} />;
}
