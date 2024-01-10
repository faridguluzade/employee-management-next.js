interface SelectOption {
  label: string;
  value: string;
}

export function transformToSelectOptions<
  T extends { id: number; name?: string; title?: string }
>(data: T[]): SelectOption[] {
  const newData = data.map((item) => ({
    label: item.name || item.title || "",
    value: (item.name || item.title || "").toLowerCase(),
  }));

  return newData;
}
