@@ purchase-approvals-and-requisitions | How purchase approvals work | Approve or reject purchase requisitions, and where requisitions come from.
Purchase approvals let a manager decide before money is committed.

## Where requisitions come from

Requisitions are raised from **Manufacturing material shortages** and through the **AI assistant**. (The approvals screen in the web app lists and decides them; it does not have a "new request" button.)

## Approve or reject

1. Open the approvals list.
2. Open a requisition and review it.
3. Choose **Approve**, or **Reject**. Rejecting asks you for a reason.

Approvers are alerted by notification when a requisition needs them.

## Permissions

Vendors, orders and approvals each have their own permissions, so approving can be limited to the right people. Reading vendors is also permission-gated.

@@ receive-goods-against-a-purchase-order | How to receive goods against a purchase order | Record a goods receipt note, handle partial deliveries, and add stock automatically.
## Create and send the purchase order

Create the PO with a vendor from the vendor master, send it, and track its status as it moves to **partial** and **received**.

## Receive goods

1. Open the purchase order.
2. Create a **Goods Receipt Note (GRN)** and enter the quantities that arrived.
3. Check the subtotal, tax (shown for information) and total.
4. Confirm.

The PO status updates from the cumulative received quantities, so you can receive in several deliveries. In a workspace with Inventory, received lines that are linked to an inventory product add stock automatically.

## Returns and bills

- **Purchase returns** return goods to a vendor against a PO.
- **Purchase invoices (bills)** are recorded through Finance accounts payable. Tax, Non-Tax and Import (foreign currency) bills are supported. See [Invoicing, Expenses & the Ledger](/docs/finance/invoicing-expenses-ledger).

## Good to know

Goods receipts and purchase returns do not post to the ledger on their own, because inventory is not carried in the ledger.
