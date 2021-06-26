# MicrosoftEdge Collections export as bookmarks  

This script will export your Edge collections as a bookmark file that can be imported by other browsers.  

![edge png (2)](https://user-images.githubusercontent.com/66783124/123514230-d0d19280-d6cc-11eb-848e-b0e746db4a7c.png)

![firefox3](https://user-images.githubusercontent.com/66783124/123514234-d8913700-d6cc-11eb-8af7-ddd3303ede41.png)

## Requirement

Node.js & npm

## How to Use

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

## Chrome
![chrome1](https://user-images.githubusercontent.com/66783124/123514170-79cbbd80-d6cc-11eb-977b-010af3e8546d.png)

![chrome2](https://user-images.githubusercontent.com/66783124/123514176-86501600-d6cc-11eb-94fc-e059883d0cb5.png)

![chrome3](https://user-images.githubusercontent.com/66783124/123514183-8ea85100-d6cc-11eb-82fc-ce9be4708e4d.png)

![chrome4](https://user-images.githubusercontent.com/66783124/123514188-936d0500-d6cc-11eb-80ec-ee65ac9f51b0.png)

## FireFox
![firefox1](https://user-images.githubusercontent.com/66783124/123514196-9d8f0380-d6cc-11eb-8d80-2a00a8e3eeed.png)

![firefox2](https://user-images.githubusercontent.com/66783124/123514197-a2ec4e00-d6cc-11eb-9ba6-4edcf218ec51.png)

![firefox3](https://user-images.githubusercontent.com/66783124/123514201-a7186b80-d6cc-11eb-8e8e-76e741d0dffc.png)

## Versions
node v16.3.0  
npm 7.16.0  
├── netscape-bookmarks@0.1.1  
└── sqlite-async@1.1.1  
