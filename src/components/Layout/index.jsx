const Layout = ({ children, className }) => (
  <div className={`max-w-2xl mx-auto p-6 flex flex-col gap-6 ${className}`}>{children}</div>
);

export default Layout;
