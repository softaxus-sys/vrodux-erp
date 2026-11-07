@@ set-up-warehouses-and-master-data | How to set up products, warehouses and master data | Create products with barcodes, organise them with brands, categories and units, and set up warehouses.
## Master data first

Set up **brands**, **product categories** and **units of measure** so every product is described consistently.

## Add products

1. Open Products and add a product with its SKU, category, brand and unit. The SKU is unique within your business.
2. Add the barcode if you scan.
3. Save. You can activate or deactivate a product later without deleting it.

The product list is paginated and filterable, and supports barcode lookup.

## Add warehouses

Create each warehouse and mark one as the **default**. Stock is then tracked per warehouse.

@@ move-and-adjust-stock | How to move, transfer and adjust stock | Record receipts, write-offs and corrections, and move stock between warehouses with an approval step.
## Stock movements

Record **receipts**, **write-offs**, **adjustments** and **count corrections**. Movements also come in automatically from other modules: purchase receipts add stock, sales deliveries reduce it, POS sales deduct it, and Manufacturing issues components and receives finished goods.

## Transfer stock between warehouses

1. Create a transfer from one warehouse to another.
2. **Submit** it for approval.
3. An approver **approves** it.
4. The receiving warehouse **receives** it.

## Reports and low stock

The Reports hub has 17 inventory reports, and a low-stock view shows what to reorder. See [Reports hub](/docs/reports/overview).

## Stock in transit

If you also use Import & Export, an "On its way" box on a product shows incoming cargo.

Permissions cover stock, warehouses, movements and transfers separately.

@@ online-listings-and-photos | How online listings and photos work | A listing is what online customers see. Each variant is an ordinary Inventory product.
## One listing, many variants

A **listing** is what customers see: name, description, photos, options such as **size and colour (up to three)**, and search details. Each **variant is an ordinary Inventory product** with its own SKU, barcode, price and stock, so POS, purchasing and reports stay correct.

## List stock online

From the stock list, or from a **Not yet listed** worklist, select items and list them as **drafts** or **published**. Photos stay with the stock item.

See [Open your online store](/docs/ecommerce/open-your-online-store).

@@ import-stock-with-pictures | How to import stock with pictures | Upload an Excel or CSV with picture links. Photos are fetched in the background.
## Import

Upload an **Excel or CSV** file with picture links. The photos are **fetched in the background**.

## Safe to run twice

Running the same file twice **does not duplicate** items.

@@ scan-a-barcode-or-qr-to-add-stock | Scan a barcode or QR to add stock | Scan to find a product you already hold and add a received quantity, or fill in a new product from public product databases.
Scanning identifies a product you **already hold** and lets you add a **received quantity**. For a product you have not entered yet, it fills in the details from public product databases such as **Open Food Facts**. You check and edit them before saving.

## Ways to scan

- **On the web app:** a **USB or Bluetooth scanner**, or the **camera** in **Chrome or Edge**.
- **On the mobile app:** the phone's **camera scanner**.

[screenshot: Scanning a barcode on the web app]

## Add stock for a product you hold

1. Scan the barcode or QR code.
2. Vrodux finds the product.
3. Enter the **quantity received** and save.

## Add a product you have not entered yet

1. Scan the barcode or QR code.
2. If Vrodux does not hold the product, it looks it up in public product databases and fills in the details it finds.
3. **Check and edit** the details, then save.

[screenshot: A new product filled in from a scan, ready to check and edit]

## Good to know

- Coverage is strongest for **food and branded goods**.
- Some products are **not found**. Enter those by hand.
- Always review what was filled in before you save.
