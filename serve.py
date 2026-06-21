#!/usr/bin/env python3
"""
VerfiX Local Development Server
================================
Run this from the verfix-multipage/ folder:

    python3 serve.py

Then open: http://localhost:8080

This serves the site with correct MIME types and handles all routes.
DO NOT use file:/// — always use this server for local preview.
"""
import http.server
import socketserver
import os
import sys

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class VerfiXHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    def do_GET(self):
        path = self.path.split("?")[0].split("#")[0]
        
        # Try exact file match
        file_path = os.path.join(DIRECTORY, path.lstrip("/"))
        if os.path.isfile(file_path):
            return super().do_GET()
        
        # Try with index.html appended
        if path.endswith("/"):
            index_path = os.path.join(DIRECTORY, path.lstrip("/"), "index.html")
            if os.path.isfile(index_path):
                self.path = path + "index.html"
                return super().do_GET()
        
        # Try path/index.html
        index_path = os.path.join(DIRECTORY, path.lstrip("/"), "index.html")
        if os.path.isfile(index_path):
            self.path = path + "/index.html"
            return super().do_GET()
        
        # Try path.html
        html_path = os.path.join(DIRECTORY, path.lstrip("/") + ".html")
        if os.path.isfile(html_path):
            self.path = path + ".html"
            return super().do_GET()
        
        # 404
        return super().do_GET()

    def log_message(self, format, *args):
        # Cleaner output
        print(f"  {self.address_string()} → {args[0][:60]}")

if __name__ == "__main__":
    os.chdir(DIRECTORY)
    with socketserver.TCPServer(("", PORT), VerfiXHandler) as httpd:
        print(f"")
        print(f"  ╔══════════════════════════════════════════════╗")
        print(f"  ║  VerfiX Local Server running                 ║")
        print(f"  ║  http://localhost:{PORT}                        ║")
        print(f"  ║                                              ║")
        print(f"  ║  Open your browser and go to:               ║")
        print(f"  ║  http://localhost:{PORT}                        ║")
        print(f"  ║                                              ║")
        print(f"  ║  Press Ctrl+C to stop                        ║")
        print(f"  ╚══════════════════════════════════════════════╝")
        print(f"")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n  Server stopped.")
