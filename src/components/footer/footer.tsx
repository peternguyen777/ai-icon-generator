import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="container flex flex-col items-center gap-10 py-12 lg:flex-row lg:justify-between lg:py-10">
        <div className="flex flex-col items-center  lg:flex-row lg:items-center">
          <p className="text-sm font-medium lg:mr-12">
            Created with 🦴 by{" "}
            <span className="font-clash font-semibold">ptrlabs</span>
          </p>
          <div className="mt-6 flex flex-col gap-6 sm:flex-row lg:mt-0">
            <Link href="/privacy">
              <p className="text-center text-sm">Privacy Policy</p>
            </Link>
            <Link href="/tos">
              <p className="text-center text-sm">Terms of Service</p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 lg:flex-row">
          <div className="flex items-center gap-4">
            <Link href="https://www.instagram.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6
              cursor-pointer fill-current hover:text-primary"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                  fillRule="nonzero"
                />
              </svg>
            </Link>
            <Link href="https://github.com/peternguyen777">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                className="cursor-pointer fill-current hover:text-primary"
              >
                <path d="M12.5 0C5.594 0 0 5.51 0 12.305c0 5.437 3.581 10.048 8.547 11.674.625.116.854-.265.854-.592 0-.292-.01-1.066-.016-2.092-3.477.742-4.21-1.65-4.21-1.65-.569-1.42-1.39-1.8-1.39-1.8-1.133-.764.087-.748.087-.748 1.255.086 1.914 1.268 1.914 1.268 1.115 1.881 2.927 1.338 3.641 1.024.113-.797.434-1.338.792-1.646-2.776-.308-5.694-1.366-5.694-6.08 0-1.343.484-2.44 1.286-3.302-.14-.31-.562-1.562.11-3.256 0 0 1.047-.33 3.437 1.261 1-.273 2.063-.409 3.125-.415 1.063.006 2.125.142 3.125.415 2.375-1.591 3.422-1.261 3.422-1.261.672 1.694.25 2.945.125 3.256.797.861 1.281 1.959 1.281 3.302 0 4.727-2.921 5.767-5.703 6.07.438.369.844 1.123.844 2.276 0 1.647-.016 2.97-.016 3.37 0 .322.22.707.86.584 5-1.615 8.579-6.23 8.579-11.658C25 5.509 19.403 0 12.5 0z" />
              </svg>
            </Link>
          </div>
          <p className="text-sm">
            <span className="font-clash font-semibold">© 2023 ptrlabs</span> All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
