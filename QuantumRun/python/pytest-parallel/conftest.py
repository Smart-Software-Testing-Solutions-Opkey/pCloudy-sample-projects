def pytest_addoption(parser):
    parser.addoption(
        "--device", action="append", default=[], help="List of device names"
    )


def pytest_generate_tests(metafunc):
    if "device_name" in metafunc.fixturenames:
        devices = metafunc.config.getoption("device")
        if not devices:
            devices = ["Samsung"]
        metafunc.parametrize("device_name", devices, indirect=False)
