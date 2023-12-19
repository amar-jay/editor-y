"use client"
 
import * as React from "react"
import { FontFamilyIcon, CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/plate-ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/plate-ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/plate-ui/popover"
 
interface Item {
  label: string;
  value: string;
}
export function Combobox({fonts, setFont, currentFont}:{fonts: Item[]; setFont: any, currentFont: string}) {
  const [open, setOpen] = React.useState(false)
 
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {currentFont
            ? fonts.find((font:Item) => font.value === currentFont)?.label
            : "Select font..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search font..." className="h-9" />
          <CommandEmpty>No fonts found.</CommandEmpty>
          <CommandGroup>
            {fonts.map((font) => (
              <CommandItem
                key={font.value}
                value={font.value}
                onSelect={(currentValue) => {
                  setFont(currentValue === currentFont ? "" : currentValue)
                  setOpen(false)
                }}
              >
                {font.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    currentFont === font.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
