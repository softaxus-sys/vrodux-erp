@@category manufacturing | Manufacturing | Bills of materials, production orders, stock issue and receipt, costing and yield. | Factory
@@ create-a-bill-of-materials | How to create a bill of materials | Define a finished product, its batch size and components with scrap percentages.
A **Bill of Materials (BOM)** says what goes into making a product. Manufacturing needs **Inventory**, because components and finished goods are inventory products.

1. Open Manufacturing and create a BOM.
2. Choose the **finished product** and the **batch size**.
3. Add the **components**, each with a **scrap %**. Component details are read from Inventory.
4. Set the status: **draft**, **active** or **archived**.

## Routing and work centres

To cost labour and overhead, define **work centres** with a labour rate and an overhead rate per hour, then add **operations** to the routing. Setup is counted once per order and run time per batch.

@@ run-a-production-order | How to run a production order | Plan, release and complete an order, issue materials with a shortage check, and receive finished goods.
## The order lifecycle

An order moves through **planned → released → in progress → completed**. You can cancel it before any material is issued. Components are **scaled from the BOM when the order is created**, so editing a BOM later never changes a live order.

## Steps

1. Create the production order from a BOM and quantity. (You can also use **Plan production** from a sales order, if you use Sales.)
2. **Release** it.
3. **Issue materials.** Vrodux runs a **shortage check**. If something is short, you can raise a purchase requisition from the shortage (needs Purchase).
4. Record the operations as they run.
5. **Complete** the order, with optional **backflush**.

## Finished goods

Scrapped units are not received. Good units are **received into Inventory at actual unit cost**.

@@ production-costing-planning-and-yield | How production costing, planning and yield reports work | See the real cost of each unit, plan material needs across orders, and check yield.
## Costing

Cost per good unit is **materials issued plus labour and overhead** calculated from **actual operation time** at the work-centre rates.

## Planning

The **planning** view shows **material requirements** across your open orders against current stock, so you know what to buy.

## Yield report

The **yield report** shows output, scrap, **yield %** and the average unit cost.

## Post cost to Finance

You can post production cost to Finance as a **draft journal entry** that you review first.

## Roles

Default **Manufacturing Manager** and **Staff** roles exist. The module is available automatically for tenants that chose the Manufacturing industry.
