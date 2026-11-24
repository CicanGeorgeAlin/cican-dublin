# CICAN Dublin — Live GPS Tracking

## Purpose

The map's location control supports continuous phone-position updates using the browser Geolocation API. The implementation uses `navigator.geolocation.watchPosition()`, not Google Maps location services or a Google Maps SDK.

## Behaviour

- Tap the map's location control to request browser location permission and start live tracking.
- The map displays a distinct blue position marker and follows subsequent accepted location fixes. The current stability layer rejects invalid, stale, inaccurate and implausible fixes; stationary-position gating and bounded smoothing are applied to the displayed coordinate.
- A compact readout displays latitude, longitude, the device-reported horizontal accuracy in metres, and the time of the latest fix.
- Tap the control again to stop tracking. The watch is cleared and the live readout and marker are removed.
- Nearby discovery and the walking planner remain separate existing features.

## Requirements and limitations

- The website must be served over HTTPS (GitHub Pages satisfies this).
- The user must enable device Location and grant the browser location permission.
- `enableHighAccuracy: true` asks the browser/device for its best available fix. The browser may combine GNSS/GPS, Wi-Fi, cellular and other device signals. The web app cannot force a particular chipset or guarantee that A-GPS is available.
- Position accuracy is reported by the device and is not a guarantee of survey-grade accuracy. Urban canyons, indoor use, multipath and poor satellite visibility can reduce accuracy.
- Live tracking requests high-accuracy updates with `maximumAge: 5000` and a 12-second timeout. The browser and phone still control the actual fix frequency; a web page cannot force the GNSS chipset to report at a fixed rate.
- The current implementation does not project the marker forward between GPS fixes using speed or heading. This avoids displaying speculative movement as if it were a measured position. The displayed coordinate is filtered separately from raw accepted GPS samples; smoothing may introduce some lag during genuine movement and must be assessed during field tests.
- No location history is uploaded or stored by this feature. Position updates are held in page memory while tracking and are used to position the map marker and nearby-discovery origin.
- This feature does not change archive object coordinates or mark any heritage record as field-verified. A founder must deliberately record and verify a separate field observation before archive data is changed.

## Manual field-recording workflow

1. Open the CICAN Dublin map on the phone.
2. Enable device Location and allow location permission when prompted.
3. Tap the location control to begin live tracking.
4. Wait for the reported accuracy to stabilise; move outdoors or to a clearer sky view if necessary.
5. Record the displayed coordinate pair and accuracy alongside the object, observation time and field notes.
6. Keep the source coordinates and founder-observed GPS fix as separate provenance fields. Do not overwrite an official or historical source coordinate automatically.

## Quality checks

The existing archive quality workflow checks JavaScript syntax and the archive's data integrity. A successful automated workflow does not replace an on-device HTTPS permission test or an outdoor GPS accuracy test on a physical phone.
