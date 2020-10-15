import 'package:portfolio/main.dart' as app;
import 'package:flutter_web_ui/ui.dart' as ui;

Future<void> main() async {
  await ui.webOnlyInitializePlatform();
  await app.main();
}
