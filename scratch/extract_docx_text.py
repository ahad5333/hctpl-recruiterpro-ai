import xml.etree.ElementTree as ET
import os

def extract_text_from_xml(xml_path):
    if not os.path.exists(xml_path):
        return "File not found."
    
    tree = ET.parse(xml_path)
    root = tree.getroot()
    
    # Word XML namespaces
    namespaces = {
        'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'
    }
    
    text_parts = []
    for t in root.findall('.//w:t', namespaces):
        if t.text:
            text_parts.append(t.text)
            
    return " ".join(text_parts)

import sys

# Ensure stdout uses UTF-8
sys.stdout.reconfigure(encoding='utf-8')

xml_file = 'extracted_docx/word/document.xml'
text = extract_text_from_xml(xml_file)
print(text)
