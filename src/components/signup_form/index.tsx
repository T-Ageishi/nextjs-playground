"use client";

import { signup } from "@/lib/actions/auth";
import { useActionState } from "react";

export function SignupForm() {
	const [state, action, pending] = useActionState(signup, undefined);

	return (
		<form
			action={action}
			className={"grid gap-y-2 grid-cols-[150px_1fr] w-64 mx-auto"}
		>
			<label htmlFor="name">Name</label>
			<input
				id="name"
				name="name"
				placeholder="Name"
				className={"border border-gray-200 p-1 rounded"}
			/>
			{state?.errors?.name && <p>{state.errors.name}</p>}

			<label htmlFor="email">Email</label>
			<input
				id="email"
				name="email"
				type="email"
				placeholder="Email"
				className={"border border-gray-200 p-1 rounded"}
			/>
			{state?.errors?.email && <p>{state.errors.email}</p>}

			<label htmlFor="password">Password</label>
			<input
				id="password"
				name="password"
				type="password"
				className={"border border-gray-200 p-1 rounded"}
			/>
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
