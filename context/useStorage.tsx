'use client';

import { useState, useContext, createContext } from 'react';

type BalanceType = {
	netWorth: number;
	totalAssets: number;
	totalLiabilities: number;
};

type StorageType = {
	storage: BalanceType[];
	setStorage: React.Dispatch<React.SetStateAction<BalanceType[]>>;
};

const StorageContext = createContext<StorageType | null>(null);

export function StorageProvider({ children }: { children: React.ReactNode }) {
	const [storage, setStorage] = useState<BalanceType[]>([
		{ netWorth: 0, totalAssets: 0, totalLiabilities: 0 },
	]);

	return (
		<StorageContext.Provider value={{ storage, setStorage }}>
			{children}
		</StorageContext.Provider>
	);
}

export function useStorage() {
	const context = useContext(StorageContext);
	if (!context) {
		throw new Error('useStorage must be used inside of Storage provider');
	}
	return context;
}
