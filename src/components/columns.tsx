"use client"

import { ColumnDef } from "@tanstack/react-table"

export type RecentPrint = {
    student_id: string;
    printer_id: string;
    time: string;
    file_size: string;
}

export const columns: ColumnDef<RecentPrint>[] = [
  {
    accessorKey: "student_id",
    header: "Student ID",
  },
  {
    accessorKey: "printer_id",
    header: "Printer",
  },
  {
    accessorKey: "time",
    header: "Time",
  },
  {
    accessorKey: "file_size",
    header: "File Size",
  },
]
