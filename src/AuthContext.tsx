import {
	FC,
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useState,
	useContext,
	useEffect,
} from 'react';
import { getCurrentUser } from '@/lib/auth';

interface AuthContextType {
	isLoggedIn: boolean;
	setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
	userId: string | number;
	setUserId: Dispatch<SetStateAction<string | number>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userId, setUserId] = useState<string | number>(0);

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
