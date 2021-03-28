if (errorMessages) {
    const errorMessageNumber = errorMessages[0];

    const missingData = [
        'vehicleName',
        'vehicleSerial',
        'VIN',
        'model',
        'brand',
        'type',
        'deviceSerialNumber',
        'deviceType',
    ];

    const missingDataFn = (message, data) => {
        for (const str of data) {
            if (message.indexOf(str) >= 0) {
                return str;
            }
        }
        return undefined;
    };

    let subErrorMessage;

    switch (missingDataFn(errorMessage, missingData)) {
        case 'vehicleName':
            subErrorMessage = t('importer:wrong_vehicle_name');
            break;
        case 'vehicleSerial':
            subErrorMessage = t('importer:wrong_vehicle_serial_number');
            break;
        case 'VIN':
            subErrorMessage = t('importer:wrong_vin');
            break;
        case 'model':
            subErrorMessage = t('importer:wrong_model');
            break;
        case 'brand':
            subErrorMessage = t('importer:wrong_brand');
            break;
        case 'type':
            subErrorMessage = t('importer:wrong_type');
            break;
        case 'deviceSerialNumber':
            subErrorMessage = t('importer:wrong_device_serial_number');
            break;
        case 'deviceType':
            subErrorMessage = t('importer:wrong_device_type');
            break;
        default:
            subErrorMessage = t('importer:import_failed');
    }