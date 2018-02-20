# Problem 1. Anonymous Downsite

The Anonymous informal group of activists have hacked a few commercial websites and the CIA has hired you to write a software which calculates the losses. Based on the given data, use the appropiate data types.<br><br>You will receive __2 input lines__ – each containing an **integer**. <br>
* The **first** is __N__ – the **number** of **websites** which are down.<br><br>
* The **second** is the **security key**.<br>

On the next N lines you will receive data about websites in the following format:<br>
**\{siteName\} \{siteVisits\} \{siteCommercialPricePerVisit\}**<br><br>You must calculate the site loss by the following formula: <br>
**siteVisits * siteCommercialPricePerVisit**<br><br>When you **finish reading all data**, you must print the **affected sites’ names** – each on a **new line**.<br>
Then you must print the **total money loss** – **sum** of all **site loss**, on a **new line**.
Finally you must print the **security token**, which is the **security key, POWERED** by the **COUNT** of **affected sites**.

### Input

* On the **first input line** you will get __N__ – the **count** of **affected websites**.<br><br>
* On the **second input line** you will the **security key**.<br><br>
* On the **next N input lines** you will get **data** about the **websites**.

### Output

* The integer __N__ will be in **range [0, 100]**.<br><br>
* The **security token** will be in **range [0, 10]**.<br><br>
* The **website name** may contain any **ASCII character** except **whitespace**.<br><br>
* The **site visits** will be an **integer** in **range [0, 231]**.<br><br>
* The **price per visit** will be a **floating point number** in **range [0, 100]** and will have __up__ to __20 digits__ after the decimal point.<br><br>
* Allowed working **time/memory: 100ms / 16MB**.<br><br>

### Examples

| Input | Output |
--------|---------
| 3<br>8<br>www.google.com 122300 94.23233<br>www.abv.bg 2333 11<br>www.kefche.com 12322 23.3222 | www.google.com<br>www.abv.bg<br>www.kefche.com<br>Total Loss: 11837653.10740000000000000000<br>Security Token: 512 |
| 1<br>1<br>www.facebook.com 100000 10.45 | www.facebook.com<br>Total Loss: 1045000.00000000000000000000<br>Security Token: 1 |


