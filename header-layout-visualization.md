# Header Layout Visualization

## Current Header Layout

```mermaid
graph TD
    A[Header Container] --> B[Header Content]
    B --> C[Logo]
    B --> D[Navigation]
    B --> E[Mobile Menu Button]
    D --> F[Nav Item 1]
    D --> G[Nav Item 2]
    D --> H[Nav Item 3]
    D --> I[Nav Item 4]
    D --> J[Nav Item 5]

    style A fill:#fff6e8,stroke:#333,stroke-width:1px
    style B fill:#fff6e8,stroke:#333,stroke-width:1px
    style C fill:#f8f8f8,stroke:#333,stroke-width:1px
    style D fill:#f8f8f8,stroke:#333,stroke-width:1px
    style E fill:#f8f8f8,stroke:#333,stroke-width:1px
```

## Target Studio Abrash Header Layout (Desktop)

```mermaid
graph TD
    A[Header Container] --> B[Header Content]
    B --> C[Logo-Brand Container]
    B --> D[Navigation]
    B --> E[Mobile Menu Button]
    C --> F[Logo]
    C --> G[Brand Name]
    D --> H[Nav Item 1]
    D --> I[Nav Item 2]
    D --> J[Nav Item 3]
    D --> K[Nav Item 4]
    D --> L[Nav Item 5]

    style A fill:#fff6e8,stroke:#333,stroke-width:1px
    style B fill:#fff6e8,stroke:#333,stroke-width:1px
    style C fill:#f8f8f8,stroke:#333,stroke-width:1px
    style D fill:#f8f8f8,stroke:#333,stroke-width:1px
    style E fill:#f8f8f8,stroke:#333,stroke-width:1px
```

## Target Studio Abrash Header Layout (Mobile)

```mermaid
graph TD
    A[Header Container] --> B[Header Content]
    B --> C[Logo-Brand Container]
    B --> D[Navigation]
    B --> E[Mobile Menu Button]
    C --> F[Logo]
    C --> G[Brand Name]
    D --> H[Nav Item 1]
    D --> I[Nav Item 2]
    D --> J[Nav Item 3]
    D --> K[Nav Item 4]
    D --> L[Nav Item 5]

    style A fill:#fff6e8,stroke:#333,stroke-width:1px
    style B fill:#fff6e8,stroke:#333,stroke-width:1px
    style C fill:#f8f8f8,stroke:#333,stroke-width:1px
    style D fill:#f8f8f8,stroke:#333,stroke-width:1px
    style E fill:#f8f8f8,stroke:#333,stroke-width:1px
```

## Layout Flow Comparison

### Current Layout Flow

```mermaid
flowchart LR
    A[Header] --> B[Flex Container]
    B --> C[Logo Left]
    B --> D[Navigation Right]
    B --> E[Mobile Button Right]
```

### Target Layout Flow

```mermaid
flowchart LR
    A[Header] --> B[Flex Column Container]
    B --> C[Logo-Brand Container Centered]
    C --> D[Logo]
    C --> E[Brand Name]
    B --> F[Navigation Centered]
    F --> G[Nav Items]
    B --> H[Mobile Button Absolute]
```

## Responsive Behavior

### Desktop to Mobile Transition

```mermaid
flowchart TD
    A[Desktop View] -->|Screen Width < 768px| B[Mobile View]
    A --> C[Horizontal Navigation]
    A --> D[Single Row Layout]
    B --> E[Vertical Navigation]
    B --> F[Stacked Layout]
```

## Component Hierarchy

### New Header Component Structure

```mermaid
flowchart TD
    A[NewHeader] --> B[header]
    B --> C[header-content]
    C --> D[logo-brand-container]
    D --> E[logo]
    E --> F[img]
    D --> G[brand-name]
    C --> H[nav]
    H --> I[nav-item 1]
    H --> J[nav-item 2]
    H --> K[nav-item 3]
    H --> L[nav-item 4]
    H --> M[nav-item 5]
    C --> N[mobile-menu-button]
    A --> O[MobileHeaderMenu]
    O --> P[mobile-nav-menu]
    P --> Q[mobile-nav-item 1]
    P --> R[mobile-nav-item 2]
    P --> S[mobile-nav-item 3]
    P --> T[mobile-nav-item 4]
    P --> U[mobile-nav-item 5]
```
