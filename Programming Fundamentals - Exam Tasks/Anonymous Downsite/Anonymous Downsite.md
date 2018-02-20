## Problem 1. Anonymous Downsite

The Anonymous informal group of activists have hacked a few commercial websites and the CIA has hired you to write a software which calculates the losses. Based on the given data, use the appropiate data types.

You will receive **2 input lines** – each containing an **integer**.

- The **first** is **N** – the **number** of **websites** which are down.
- The **second** is the **security key**.

On the **next N lines** you will receive **data** about **websites** in the following format:
**{siteName} {siteVisits} {siteCommercialPricePerVisit}**

You must **calculate** the **site loss** by the following formula: **siteVisits \* siteCommercialPricePerVisit**

When you **finish reading all data** , you must print the **affected sites&#39; names** – each on a **new line**.
Then you must print the **total money loss** – **sum** of all **site loss** , on a **new line**.
Finally you must print the **security token** , which is the **security key** , **POWERED** by the **COUNT** of **affected sites**.

### Input

- On the **first input line** you will get **N** – the **count** of **affected websites**.
- On the **second input line** you will the **security key**.
- On the **next N input lines** you will get **data** about the **websites**.

### Output

- As output you must print **all affected websites&#39; names** – **each** on a **new line**.
- **After** the **website names** you must print the **total loss** of **data** , printed to the **20**
# th
 **digit** after the **decimal point**. The format is &quot; **Total Loss: {totalLoss}**&quot;.
- Finally you must **print** the **security token**. The format is &quot; **Security T**** oken: {securityToken}**&quot;.

### Constrains

- The integer **N** will be in **range**** [0, 100]**.
- The **security token** will be in **range**** [0, 10]**.
- The **website name** may contain any **ASCII character** except **whitespace**.
- The **site visits** will be an **integer** in **range [0, 2**
# 31
**].**
- The **price per visit** will be a **floating point number** in **range [0, 100]** and will have **up** to **20 digits** after the decimal point.
- Allowed working **time/memory** : **100ms / 16MB**.

### Examples

| **Input** | **Output** |
| --- | --- |
| 38www.google.com 122300 94.23233www.abv.bg 2333 11www.kefche.com 12322 23.3222 | www.google.comwww.abv.bgwww.kefche.comTotal Loss: 11837653.10740000000000000000Security Token: 512 |
| 11www.facebook.com 100000 10.45 | www.facebook.comTotal Loss: 1045000.00000000000000000000Security Token: 1 |

_Remember, remember!_

_The fifth of November..._