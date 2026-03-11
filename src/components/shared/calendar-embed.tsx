import { cn } from "@/lib/utils";

export function CalendarBooking({
  url,
  className,
}: {
  url: string;
  className?: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-block text-sm font-work-sans font-semibold underline underline-offset-4 hover:no-underline transition-colors",
        className
      )}
    >
      Book directly in our calendar →
    </a>
  );
}
