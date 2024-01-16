export default function ColorBoxLayout({ children, left, right }) {
  const isSideBar = true;
  return (
    <section>
      {children}
      {/* {left}
      {right} */}

      {isSideBar ? left : right}
    </section>
  );
}
