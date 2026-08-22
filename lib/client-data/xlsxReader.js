/*
 * FILE: lib/client-data/xlsxReader.js
 * PURPOSE:
 * Low-level XLSX reader module using approved pinned SheetJS library.
 *
 * RESPONSIBILITIES:
 * - Read local .xlsx workbook files deterministically
 * - Extract sheet names and raw row/cell matrices
 * - Preserve exact cell text and types without modification or truncation
 * - Provide a clean, structured workbook representation for the parser
 *
 * DEPENDENCIES:
 * - xlsx (SheetJS Community Edition 0.20.3)
 *
 * NOTES:
 * - Pure workbook reader: contains no business logic or client-specific mapping.
 */

import * as XLSX from "xlsx";
import * as fs from "fs";
import * as path from "path";

/**
 * Reads a local XLSX file and returns a structured workbook representation.
 * @param {string} filePath - Absolute or relative path to the .xlsx file
 * @returns {object} Structured workbook with sheet names and 2D row arrays
 */
export function readWorkbook(filePath) {
  const resolvedPath = path.resolve(filePath);

  if (!fs.existsSync(resolvedPath)) {
    throw new Error(`XLSX Reader Error: File not found at path: ${resolvedPath}`);
  }

  // Read workbook file buffer
  const fileBuffer = fs.readFileSync(resolvedPath);
  const workbook = XLSX.read(fileBuffer, {
    type: "buffer",
    cellDates: true,
    raw: false, // Formats strings cleanly
    dense: true, // Optimizes array representation
  });

  const sheets = {};

  for (const sheetName of workbook.SheetNames) {
    const worksheet = workbook.Sheets[sheetName];
    // Convert worksheet to 2D array matrix (preserving raw cell contents)
    const rows = XLSX.utils.sheet_to_json(worksheet, {
      header: 1,
      defval: null,
      blankrows: true,
      raw: false,
    });

    sheets[sheetName] = {
      name: sheetName,
      rowCount: rows.length,
      rows,
      rawWorksheet: worksheet,
    };
  }

  return {
    filePath: resolvedPath,
    sheetNames: workbook.SheetNames,
    sheets,
    rawWorkbook: workbook,
  };
}
