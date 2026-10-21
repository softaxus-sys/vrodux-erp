@@ tax-invoices-and-recurring-invoices | How to issue tax invoices and recurring invoices | Send professional tax invoices, set up recurring invoices that email themselves, and record payments.
## Issue an invoice

1. Open Finance and create an invoice for a customer.
2. Add the lines, tax and payment terms.
3. Send it, then mark it **paid** when the money arrives, or **cancel** it if needed.

When your company has a TRN set, the document is titled **TAX INVOICE**. It shows the seller's full name, registered address and TRN, and the buyer's address and TRN, on print, PDF and email.

## Recurring invoices

For work you bill on a schedule:

1. Create a recurring invoice template with its schedule, for example monthly.
2. Add CC addresses if others should receive a copy.
3. Choose whether it **auto-emails** the customer with a PDF. This is a per-template switch.

Recurring invoices are editable before they go out.

## Receipts and payments

Record **receipt vouchers** for money in and **payment vouchers** for money out. Receivables and payables show what is owed to you and by you.

Customers and suppliers are kept as records, and a quotation from Sales can be linked to its invoice. See [Invoicing, Expenses & the Ledger](/docs/finance/invoicing-expenses-ledger) for the overview.

@@ record-and-approve-expenses | How to record and approve expenses | Record expenses and purchase bills, approve and pay them, and automate recurring expenses.
## One-off expenses

Create the expense with its category. A manager **approves** or **rejects** it, and once approved it can be **paid**.

## Purchase bills

Purchase bills handle accounts payable and include **Import bills in foreign currency**. They carry an approval step before payment.

## Recurring expenses

For costs that repeat, such as rent:

1. Create a recurring expense template with its schedule.
2. Choose the debit and credit accounts.
3. Decide how it runs. Either **review each one** before it is posted, or set the template to **auto-post**, which approves it, pays it and posts it to the ledger.

## Good to know

Currency is your company's operating currency. Postings are converted into it using the daily exchange rate, which refreshes against a USD base.

@@ reconcile-a-bank-account | How to reconcile a bank account | Link a bank account to the ledger and match statement lines to journal lines.
1. Open Banking and add your bank account.
2. **Link the bank account to a ledger account.**
3. Open the reconciliation screen for that account.
4. Match statement lines to journal lines. When a match is unambiguous, use **auto-match** to confirm it in one click.
5. If you matched something by mistake, **unmatch** it.

## Good to know

Reconciliation is done by matching entries you have recorded. Importing a bank statement file and matching one statement line to several journal lines are not available.

@@ prepare-a-uae-vat-return | How to prepare a UAE VAT 201 return | Prepare your VAT return from the ledger, check it, export the files, and record your filing reference.
Vrodux **prepares** your VAT 201 return. It does **not** submit it to the FTA. You file through the FTA portal and record the reference in Vrodux.

## Steps

1. Open the VAT area and start a VAT 201 return for the period.
2. Vrodux computes the **boxes from your ledger**.
3. Run the **validation** and fix any issues it reports.
4. Check that the return **reconciles to the VAT control account**.
5. Move the return through its workflow: **draft → approved → ready**.
6. **Export** the FAF CSV and XML files.
7. File in the FTA portal (EmaraTax). Then mark the return **filed via portal** and enter your EmaraTax reference.

## Good to know

- The FTA publishes no VAT-return API, so submission is manual.
- The XML export is not FTA-certified. Use it as a preparation aid and check it against the portal.

@@ integration-center-and-finance-posting | How the Integration Center posts other modules to the ledger | See how POS, restaurant, rent, library fines and payroll reach the ledger, and choose off, review or auto per source.
The Integration Center is where you control how each module's transactions become accounting entries.

## What can post

Seven sources queue documents for posting: **POS sales and refunds**, **restaurant orders and refunds**, **real-estate rent**, **library fines** and **payroll**. Also supported: sales returns, wallet top-ups, POS cash in and out, and hotel payments. Only the modules you are licensed for appear.

## Choose a mode per source

- **Off:** nothing is queued.
- **Review:** documents queue up and you post them manually.
- **Auto:** documents post themselves, from a start date you set. Switching to Auto needs your explicit acknowledgement.

## Safeguards

- A **check before posting** shows problems per document.
- **Control totals** for each batch.
- Unreadable data is **held for review**.
- A **duplicate-posting guard**.
- **Reversal** with a reason.
- **Approval limits** and an optional second approver.

## Account mapping

Account mapping per role is customisable. Before switching any source to automatic, ask an accountant to confirm the mappings. Tips, for example, and payroll withholdings default to a liability account.

## Permissions

Integrations have view, submit, approve and approve-high keys, so different people can prepare and approve.
