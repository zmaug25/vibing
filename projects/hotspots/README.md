# Interactive Hotspot Tool

A modern, responsive interactive hotspot tool that allows you to create clickable areas on images or backgrounds with custom popup content. Now with full editing capabilities!

## Features

- **Multiple Hotspots**: Create multiple interactive hotspots on any background
- **Customizable Content**: Each hotspot can have unique text, images, or videos
- **Color-coded Hotspots**: Different colors for different types of content
- **Smooth Animations**: Hover effects and smooth transitions
- **Responsive Design**: Works on desktop and mobile devices
- **Dynamic Hotspots**: Add new hotspots on the fly
- **Interactive Controls**: Toggle visibility and reset view
- **🎯 Full Editing Capabilities**: 
  - Drag-and-drop positioning
  - Precise X,Y coordinate editing
  - Color customization
  - Media upload (images and videos)
  - Real-time coordinate display

## Files

- `index.html` - Basic version of the hotspot tool
- `enhanced-hotspot.html` - Enhanced version with multiple features
- `editable-hotspot.html` - **NEW!** Fully editable version with drag-and-drop and media upload
- `example-with-image.html` - Practical example with a landscape image
- `README.md` - This documentation file

## Quick Start

### For Viewing Only:
1. Open `enhanced-hotspot.html` in your web browser
2. Click on the colored hotspots to see the popup content
3. Use the control buttons in the top-right corner to:
   - Add new hotspots
   - Toggle hotspot visibility
   - Reset the view

### For Full Editing:
1. Open `editable-hotspot.html` in your web browser
2. Click "Edit Mode" to enable editing
3. **Drag hotspots** to reposition them
4. **Click on hotspots** to edit their properties
5. **Click "+ New Hotspot"** then click anywhere on the background to add new hotspots
6. **Upload media** (images/videos) to enhance your hotspots

## Editing Features

### Mode Toggle
- **View Mode**: Click hotspots to see popup content
- **Edit Mode**: Click hotspots to edit them, drag to reposition

### Hotspot Positioning
- **Drag & Drop**: Click and drag hotspots to reposition them
- **Precise Coordinates**: Edit X,Y coordinates manually in the editor panel
- **Real-time Display**: See current coordinates in the bottom-left corner

### Color Customization
Choose from 8 different colors:
- Red, Blue, Green, Yellow, Purple, Orange, Pink, Cyan

### Content Editing
- **Title**: Set a custom title for each hotspot
- **Description**: Add detailed descriptions
- **Media Upload**: Upload images or videos to display in popups

### Media Upload
- **Supported Formats**: JPG, PNG, GIF, WebP, MP4, WebM, OGG
- **Preview**: See uploaded media in the editor panel
- **Automatic Display**: Media appears in popups automatically

## Customization

### Adding Your Own Background

Replace the sample background in any HTML file:

```html
<!-- Replace this div with your image -->
<div id="background-container">
  <img src="your-background-image.jpg" alt="Your Background">
  <!-- hotspots go here -->
</div>
```

### Creating New Hotspots

#### Manual Method:
Add a new hotspot by copying this structure:

```html
<div class="hotspot" style="top: 25%; left: 30%;" data-color="red" data-popup="popup1">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
</div>
```

#### Interactive Method (Editable Version):
1. Click "+ New Hotspot" button
2. Click anywhere on the background
3. Edit the hotspot properties in the editor panel

### Customizing Popup Content

Each popup can contain any HTML content:

```html
<div class="popup" id="popup1">
  <span class="close-btn">&times;</span>
  <div class="popup-content">
    <h3>Your Title</h3>
    <p>Your description text</p>
    <img src="your-image.jpg" alt="Your Image">
    <video controls>
      <source src="your-video.mp4" type="video/mp4">
    </video>
  </div>
</div>
```

### Available Colors

- `red` - Red hotspots
- `blue` - Blue hotspots  
- `green` - Green hotspots
- `yellow` - Yellow hotspots
- `purple` - Purple hotspots
- `orange` - Orange hotspots
- `pink` - Pink hotspots
- `cyan` - Cyan hotspots

## Positioning Hotspots

Hotspots are positioned using CSS percentages:
- `top: 25%` - 25% from the top
- `left: 30%` - 30% from the left

You can use any percentage values between 0% and 100%.

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Mobile Support

The tool is responsive and works on mobile devices. Hotspots will scale appropriately for touch interaction.

## Advanced Features

### Dynamic Hotspot Creation

The enhanced version includes JavaScript functions to create hotspots programmatically:

```javascript
// Add a new hotspot
addHotspot();

// Toggle hotspot visibility
toggleHotspots();

// Reset the view
resetView();
```

### Editing Functions (Editable Version)

```javascript
// Set edit mode
setMode('edit');

// Add new hotspot at specific coordinates
addHotspot(x, y, color, title, description, mediaUrl);

// Save hotspot changes
saveHotspot();

// Delete hotspot
deleteHotspot();
```

### Custom Styling

You can customize the appearance by modifying the CSS variables and classes in the `<style>` section.

## Troubleshooting

### Hotspots Not Appearing
- Check that the background image is loading correctly
- Ensure the hotspot elements are positioned within the container
- Verify that the CSS is properly loaded

### Popups Not Showing
- Check that the popup IDs match the `data-popup` attributes
- Ensure JavaScript is enabled in your browser
- Check the browser console for any JavaScript errors

### Editing Not Working
- Make sure you're in "Edit Mode"
- Check that the editor panel is visible
- Ensure you've selected a hotspot to edit

### Media Upload Issues
- Check file format compatibility
- Ensure file size is reasonable (under 10MB recommended)
- Verify browser supports FileReader API

### Mobile Issues
- Test on different screen sizes
- Ensure touch events are working properly
- Check that the viewport meta tag is present

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to submit issues and enhancement requests! 