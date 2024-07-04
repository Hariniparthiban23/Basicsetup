import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
} from 'react-native';
import { useCameraDevices } from 'react-native-vision-camera';
import { Camera } from 'react-native-vision-camera';
import { useScanBarcodes, BarcodeFormat } from 'vision-camera-code-scanner';

const ScanScreen = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const devices = useCameraDevices();
  const device = devices.back;

  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
    checkInverted: true,
  });

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
    })();
  }, []);

  // Define the dimensions of the mask cutout
  const maskCutoutSize = { width: 280, height: 200 };
  const maskMarginTop = (Dimensions.get('window').height - maskCutoutSize.height) / 2;

  // Animation to move the red line up and down
  const animatedValue = new Animated.Value(maskMarginTop);
  const moveLine = () => {
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: maskMarginTop + maskCutoutSize.height - 5,
        duration: 2000,
        useNativeDriver: false,
      }),
      Animated.timing(animatedValue, {
        toValue: maskMarginTop + 5,
        duration: 2000,
        useNativeDriver: false,
      }),
    ]).start(moveLine);
  };

  useEffect(() => {
    if (hasPermission) {
      moveLine();
    }
  }, [hasPermission]);

  return (
    <>
      {device != null && hasPermission && (
        <>
          <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
            frameProcessor={frameProcessor}
            frameProcessorFps={5}
          />
          <View style={styles.maskContainer}>
            <View style={[styles.maskCutout, { marginTop: maskMarginTop }]}>
              {barcodes.map((barcode, idx) => (
                <Text key={idx} style={styles.barcodeTextURL}>
                  {barcode.displayValue}
                </Text>
              ))}
              <Animated.View
                style={[
                  styles.redLine,
                  { top: animatedValue },
                ]}
              />
            </View>
          </View>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  maskContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  maskCutout: {
    width: 280,
    height: 200,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  barcodeTextURL: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  redLine: {
    width: 280,
    height: 2,
    backgroundColor: 'red',
    position: 'absolute',
  },
});

export default ScanScreen;
