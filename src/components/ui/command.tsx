"use client"

import * as React from "react"
import { type DialogProps } from "@radix-ui/react-dialog"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent } from "@/components/ui/dialog"

type CommandRef = React.ForwardedRef<HTMLDivElement>
type CommandProps = React.ComponentPropsWithoutRef<typeof CommandPrimitive>

const Command = React.forwardRef((
  { className, ...props }: CommandProps, 
  ref: CommandRef
) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    )}
    {...props}
  />
))
Command.displayName = CommandPrimitive.displayName

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

type CommandInputRef = React.ForwardedRef<HTMLInputElement>
type CommandInputProps = React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>

const CommandInput = React.forwardRef((
  { className, ...props }: CommandInputProps,
  ref: CommandInputRef
) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  </div>
))

CommandInput.displayName = CommandPrimitive.Input.displayName

type CommandListRef = React.ForwardedRef<HTMLDivElement>
type CommandListProps = React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>

const CommandList = React.forwardRef((
  { className, ...props }: CommandListProps,
  ref: CommandListRef
) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
))

CommandList.displayName = CommandPrimitive.List.displayName

type CommandEmptyRef = React.ForwardedRef<HTMLDivElement>
type CommandEmptyProps = React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>

const CommandEmpty = React.forwardRef((
  props: CommandEmptyProps,
  ref: CommandEmptyRef
) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="py-6 text-center text-sm"
    {...props}
  />
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

type CommandGroupRef = React.ForwardedRef<HTMLDivElement>
type CommandGroupProps = React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>

const CommandGroup = React.forwardRef((
  { className, ...props }: CommandGroupProps,
  ref: CommandGroupRef
) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    )}
    {...props}
  />
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

type CommandSeparatorRef = React.ForwardedRef<HTMLDivElement>
type CommandSeparatorProps = React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>

const CommandSeparator = React.forwardRef((
  { className, ...props }: CommandSeparatorProps,
  ref: CommandSeparatorRef
) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 h-px bg-border", className)}
    {...props}
  />
))

CommandSeparator.displayName = CommandPrimitive.Separator.displayName

type CommandItemRef = React.ForwardedRef<HTMLDivElement>
type CommandItemProps = React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>

const CommandItem = React.forwardRef((
  { className, ...props }: CommandItemProps,
  ref: CommandItemRef
) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  />
))

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
CommandShortcut.displayName = "CommandShortcut"

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
