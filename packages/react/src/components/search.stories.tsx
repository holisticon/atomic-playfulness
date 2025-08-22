import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Search } from "./search.js";

const meta: Meta<typeof Search> = {
  title: "Components/Search",
  component: Search,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    placeholder: "Search...",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    label: "Search",
    placeholder: "Search for items...",
  },
};

export const WithDescription: Story = {
  args: {
    label: "Search Products",
    placeholder: "Enter product name or category",
    description: "Search across all available products and categories",
  },
};

export const Invalid: Story = {
  args: {
    label: "Search",
    invalid: true,
    description: "Please enter a valid search term",
    value: "invalid query!@#",
  },
};

export const Brand: Story = {
  args: {
    brand: true,
    placeholder: "Search with brand styling...",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Search disabled",
    value: "Cannot search",
  },
};

export const NoClearButton: Story = {
  args: {
    showClearButton: false,
    placeholder: "No clear button",
    value: "Search text",
  },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState("");
    const [lastSearch, setLastSearch] = useState("");

    return (
      <div style={{ maxWidth: "400px" }}>
        <Search
          label="Interactive Search"
          placeholder="Type and press Enter to search"
          value={value}
          onChange={setValue}
          onSearch={(searchValue) => setLastSearch(searchValue)}
          onClear={() => setLastSearch("")}
          description="Press Enter to search or click X to clear"
        />
        {lastSearch && (
          <div
            style={{
              marginTop: "1rem",
              padding: "1rem",
              backgroundColor: "#f5f5f5",
              borderRadius: "4px",
            }}
          >
            <strong>Last search:</strong> "{lastSearch}"
          </div>
        )}
      </div>
    );
  },
};

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        maxWidth: "400px",
      }}
    >
      <Search label="Default" placeholder="Search..." />

      <Search
        label="With Value"
        placeholder="Search..."
        value="example search"
      />

      <Search
        label="Invalid"
        placeholder="Search..."
        invalid
        description="Please enter a valid search term"
      />

      <Search label="Brand Style" placeholder="Brand search..." brand />

      <Search
        label="Disabled"
        placeholder="Disabled search"
        disabled
        value="Cannot edit"
      />
    </div>
  ),
};

export const SearchExamples: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div style={{ maxWidth: "500px" }}>
        <h4>Product Search</h4>
        <Search
          label="Find Products"
          placeholder="Search by name, category, or SKU"
          description="Search across our entire catalog of products"
        />
      </div>

      <div style={{ maxWidth: "300px" }}>
        <h4>Quick Search (No Label)</h4>
        <Search placeholder="Quick search..." brand />
      </div>

      <div style={{ maxWidth: "400px" }}>
        <h4>Document Search</h4>
        <Search
          label="Search Documents"
          placeholder="Enter keywords, title, or author"
          description="Search through all uploaded documents and files"
        />
      </div>
    </div>
  ),
};

export const InHeader: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 2rem",
        backgroundColor: "#f8f9fa",
        borderRadius: "8px",
        marginBottom: "2rem",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <h2 style={{ margin: 0 }}>My App</h2>
        <nav>
          <a href="#" style={{ textDecoration: "none", marginRight: "1rem" }}>
            Home
          </a>
          <a href="#" style={{ textDecoration: "none", marginRight: "1rem" }}>
            Products
          </a>
          <a href="#" style={{ textDecoration: "none" }}>
            About
          </a>
        </nav>
      </div>

      <div style={{ minWidth: "200px" }}>
        <Search placeholder="Search..." brand showClearButton={false} />
      </div>

      <div>
        <button>Account</button>
      </div>
    </div>
  ),
};
