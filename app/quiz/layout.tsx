
export default function NestedLayout({
 children ,
 }: {
    children: React.ReactNode;
}) {
    return (
        <nav>this is navigation
            {children}
        </nav>

    );
}