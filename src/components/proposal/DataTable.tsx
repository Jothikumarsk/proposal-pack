interface DataTableProps {
  headers: string[];
  rows: string[][];
}

const DataTable = ({ headers, rows }: DataTableProps) => {
  return (
    <div className="overflow-x-auto rounded-xl border border-border shadow-soft">
      <table className="w-full">
        <thead>
          <tr className="gradient-primary text-primary-foreground">
            {headers.map((header, index) => (
              <th 
                key={index} 
                className="px-4 py-3 text-left text-sm font-semibold font-body first:rounded-tl-xl last:rounded-tr-xl"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr 
              key={rowIndex} 
              className="border-b border-border last:border-b-0 bg-card hover:bg-muted/50 transition-colors"
            >
              {row.map((cell, cellIndex) => (
                <td 
                  key={cellIndex} 
                  className="px-4 py-3 text-sm font-body text-foreground"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
