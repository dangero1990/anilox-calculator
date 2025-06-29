const volumeData = {
      100: { range: "15.3-21.5", recommended: 18.4, angle: 15 },
      120: { range: "14.8-17.7", recommended: 15.2, angle: 30 },
      140: { range: "11.5-14.0", recommended: 12.7, angle: 45 },
      165: { range: "9.7-11.5", recommended: 10.7, angle: 60 },
      180: { range: "9.0-10.5", recommended: 9.7, angle: 75 },
      200: { range: "6.8-10.0", recommended: 8.7, angle: 90 },
      220: { range: "7.0-8.5", recommended: 7.8, angle: 105 },
      240: { range: "6.7-8.0", recommended: 7.3, angle: 120 },
      250: { range: "6.5-7.8", recommended: 6.9, angle: 135 },
      260: { range: "6.0-7.5", recommended: 6.6, angle: 150 },
      280: { range: "5.5-6.8", recommended: 6, angle: 165 },
      300: { range: "5.0-6.1", recommended: 5.5, angle: 180 },
      330: { range: "4.6-5.6", recommended: 5, angle: 200 },
      360: { range: "4.0-9.0", recommended: 4.6, angle: 220 },
      400: { range: "3.5-7.5", recommended: 4, angle: 240 },
      440: { range: "3.2-6.7", recommended: 3.6, angle: 260 },
      500: { range: "2.8-6.7", recommended: 3.2, angle: 280 },
      550: { range: "2.6-6.6", recommended: 2.9, angle: 290 },
      600: { range: "2.3-5.6", recommended: 2.6, angle: 300 },
      650: { range: "2.0-5.2", recommended: 2.3, angle: 320 },
      700: { range: "1.9-5.0", recommended: 2.2, angle: 340 },
      800: { range: "1.7-4.4", recommended: 1.9, angle: 360 },
      900: { range: "1.5-3.9", recommended: 1.5, angle: 380 },
      1000: { range: "1.2-3.7", recommended: 1.2, angle: 400 },
      1200: { range: "1.0-3.2", recommended: 1, angle: 420 },
      1400: { range: "0.9-2.6", recommended: 0.9, angle: 440 },
      1500: { range: "0.8-2.1", recommended: 0.8, angle: 460 },
      1800: { range: "0.7-1.6", recommended: 0.7,angle: 480 },
      2000: { range: "0.6-1.4", recommended: 0.6, angle: 500 }
    };

    function calculateVolume() {
      let lpiValue = document.getElementById('lpi').value;
      let lcmValue = document.getElementById('lcm').value;

      let selectedValue = null;
      if (lpiValue !== "") {
        selectedValue = lpiValue;
      } else if (lcmValue !== "") {
        selectedValue = Math.round(lcmValue * 2.54);  // Convert L/cm to LPI by multiplying by 2.54
      }

      if (!selectedValue || !volumeData[selectedValue]) {
        alert("Please select a valid LPI or L/cm.");
        return;
      }

      const data = volumeData[selectedValue];
      document.getElementById('volumeRange').textContent = `Volume Range (BCM): ${data.range} BCM`;
      document.getElementById('recommendedVolume').textContent = `Recommended Volume (BCM): ${data.recommended} BCM`;

      document.getElementById('cm3Range').textContent = `Volume Range (cm³/m²): ${data.cm3Range} cm³/m²`;
      document.getElementById('recommendedCm3').textContent = `Recommended Volume (cm³/m²): ${data.recommendedCm3} cm³/m²`;

      document.getElementById('result').style.display = 'block';

      // Move the needle on the gauge
      document.getElementById('needle').style.transform = `rotate(${data.angle}deg)`;
    }

    function resetCalculator() {
      document.getElementById('lpi').value = "";
      document.getElementById('lcm').value = "";
      document.getElementById('result').style.display = 'none';
      document.getElementById('needle').style.transform = `rotate(0deg)`; // Reset needle
    }