[Screenity video - May 5, 2025.webm](https://github.com/user-attachments/assets/45825e3d-9dd8-4356-980b-4217f4f9fcee)


### 📦 Installation

1. **Clone the repository**

```bash
git clone git clone https://github.com/sahrajnish/RFP.git

cd RFP
```
2. Install Backend dependencies
```
npm install
```
3. Install Frontend dependencies
```
cd client

npm install

cd ..
```
4. Setup Environment Variables \
Create a **.env** file in the root directory:
```
PORT=9090
MONGODB_URI=your_mongo_connection_string
```
**NOTE: Donot add DB_NAME after the string and if there is "/" at the last of string then remove it.**

5.  Run the App Locally
```
npm run dev
