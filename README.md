# MicrosoftEdge Collections export as bookmarks  
---
This script will export your Edge collections as a bookmark file that can be imported by other browsers.  

## How to Use
---
Install the script & Run `npx export-edge-collections`  

    user@user ~> npx export-edge-collections
    Need to install the following packages:
      export-edge-collections
    Ok to proceed? (y) 
    ### Please enter the path for the edge collections file
    ### Example in Windows: C:\Users\{UserName}\AppData\Local\Microsoft\Edge\User Data\Default\Collections\collectionsSQLite
    ### Example in Mac: /Users/{UserName}/Library/Application Support/Microsoft Edge/Default/Collections/collectionsSQLite
    ### Example in Linux: /home/{userName}/.config/microsoft-edge-dev/Default/Collections/collectionsSQLite

    >>

Enter the absolute path of the `collectionsSQLite` on your PC.  
Example: `>> /home/user/.config/microsoft-edge-dev/Default/Collections/collectionsSQLite`  

    user@user ~> npx export-edge-collections
    Need to install the following packages:
      export-edge-collections
    Ok to proceed? (y) 
    ### Please enter the path for the edge collections file
    ### Example in Windows: C:\Users\{UserName}\AppData\Local\Microsoft\Edge\User Data\Default\Collections\collectionsSQLite
    ### Example in Mac: /Users/{UserName}/Library/Application Support/Microsoft Edge/Default/Collections/collectionsSQLite
    ### Example in Linux: /home/{userName}/.config/microsoft-edge-dev/Default/Collections/collectionsSQLite

    >> /home/user/.config/microsoft-edge-dev/Default/Collections/collectionsSQLite
    [SUCCESS] Export Success!! 
    [SUCCESS] Let's import EdgeCollectionBookmarks.html into your favarite browser!! 

If the path you entered is correct, the bookmark file will be generated in the current directory.

    user@user ~> ls
    EdgeCollectionBookmarks.html

You can import this in your favorite browser.
