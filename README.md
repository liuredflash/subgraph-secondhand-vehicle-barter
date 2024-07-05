## Subgraph for secondhand-vehicle-barter

### Aim

this porject aims to provide strectured data for secondhand-vehicle barter. it can listen events sent by bartering contracts. then strecture and sort the raw data for the frontend of bartering market. so the martket can update the information in real time.

#### How to run

1. Install the dependency  
   `yarn install --dev`
2. Gengerate codes for subgraph  
   `graph codegen && graph build`
3. Depoly the subgraph  
   `graph deploy --studio second-hand-vehicle-2`
