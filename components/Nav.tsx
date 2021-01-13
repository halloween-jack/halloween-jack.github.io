export default function Nav({ children }: { children: React.ReactNode }) {
  return (
    <nav className="p-4">
      <ul className="flex space-x-2">{children}</ul>
    </nav>
  );
}
