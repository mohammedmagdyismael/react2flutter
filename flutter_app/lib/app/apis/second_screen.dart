import 'package:flutter_app/app/apis/urls.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;

class SecondScreenApi {
  Future<List<dynamic>> groupsAPI() async {
    try {
      final response = await http.get(Uri.parse(URL.secondscreenurl));
      if (response.statusCode == 200) {
        return json.decode(response.body);
      } else {
        print('Failed to load groups: ${response.statusCode}');
        return [];
      }
    } catch (e) {
      print('Error fetching groups: $e');
      return [];
    }
  }
}
