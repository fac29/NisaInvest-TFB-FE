import React, { createContext, useState, useContext, useEffect } from 'react';
import { getCurrentUser } from '@/lib/auth';

interface AuthContextType {
	isLoggedIn: boolean;
	setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
	userId: string | number;
	setUserId: React.Dispatch<React.SetStateAction<string | number>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userId, setUserId] = useState(null);

	useEffect(() => {
		const checkLoginStatus = async () => {
			const user = await getCurrentUser();
			if (user) {
				const id = user.id;
				setUserId(id);
			}
			setIsLoggedIn(!!user);
		};
		checkLoginStatus();
	}, []);

	return (
		<AuthContext.Provider
			value={{ isLoggedIn, setIsLoggedIn, userId, setUserId }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
};
