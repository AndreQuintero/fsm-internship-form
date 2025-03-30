"use client"

import * as React from "react"
import { getMonth, getYear, setMonth, setYear } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select"

type DatePickerProps = {
    startYear?: number
    endYear?: number
    children: React.ReactNode
    date: Date
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChange: (...event: any[]) => void 
    pickMonthYear?: boolean
    onDisable?: (date: Date) => boolean
}
export function DatePicker({ children, startYear = getYear(new Date()) - 100, endYear = getYear(new Date) + 100, date, onChange, pickMonthYear = false, onDisable }: DatePickerProps) {
 
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const years = Array.from({ length: endYear - startYear + 1}, (_, i) => startYear + i)

  const handleMonthChange = (month: string) => {
    const selectedDate = date ?? new Date()
    const newDate = setMonth(selectedDate, months.indexOf(month))
    onChange(newDate)
  }

  const handleYearChange = (year: string) => {
    const selectedDate = date ?? new Date()
    const newDate = setYear(selectedDate, parseInt(year))
    onChange(newDate)
  }
  return (
    <Popover>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        {pickMonthYear && (<div className="flex justify-between p-2">
            <Select onValueChange={handleMonthChange} value={months[getMonth(date ?? "")]}>
                <SelectTrigger className="w-[110px]">
                    <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                    {months.map(month => <SelectItem key={month} value={month}>{month}</SelectItem>)}
                </SelectContent>
            </Select>
            <Select onValueChange={handleYearChange} value={date ? getYear(date).toString() : undefined}>
                <SelectTrigger className="w-[110px]">
                    <SelectValue placeholder="year" />
                </SelectTrigger>
                <SelectContent>
                    {years.reverse().map(year => <SelectItem key={year} value={year.toString()}>{year}</SelectItem>)}
                </SelectContent>
            </Select>
        </div>)}
        <Calendar
          mode="single"
          selected={date}
          onSelect={onChange}
          month={date}
          disabled={onDisable}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
