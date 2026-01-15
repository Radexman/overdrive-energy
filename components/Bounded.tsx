import clsx from 'clsx';

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

const Bounded = ({ className, children, ...props }: BoundedProps) => {
  return (
    <div className={clsx('px-4 first:pt-10 md:px-6', className)} {...props}>
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center">{children}</div>
    </div>
  );
};

export default Bounded;
