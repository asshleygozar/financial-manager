function RightSideBar({children} : {children: React.ReactNode}) {
    return (
        <aside className="text-white bg-red-400">
            <h1>Accounts</h1>
            {children}
        </aside>
    );
}

export default RightSideBar;