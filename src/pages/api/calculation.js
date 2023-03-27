export default function calculationHandler(req, res) {
    try {
  
      // Perform the calculation
      const calculationResult = {
        maxCapacity: "100kWp",
        yearlyEnergy: "1200kWh",
        totalArea: "700m2",
      };
  
      res.status(200).json(calculationResult);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  }
  